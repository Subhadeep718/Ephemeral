import { useForm, FieldApi } from "@tanstack/react-form";
import { Send } from "lucide-react";
import { AttachFileIcon } from "./iconLibrary/attach-file";
import toast from "react-hot-toast";

interface PostFormData {
  content: string | null;
  file: string | null;
}

export default function PostForm() {
  const form = useForm<PostFormData>({
    defaultValues: {
      content: "",
      file: null,
    },
    onSubmit: async ({ value, setError, form }) => {
      try {
        const resp = await fetch("/api/v1/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        });

        if (!resp.ok) {
          const err = await resp.json().catch(() => null);
          const msg =
            err?.message || resp.statusText || "Unable to create post";
          throw new Error(msg);
        }

        toast.success("Post created");
        form.reset();
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unexpected error";
        toast.error(message);
      }
    },
  });

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: FieldApi<PostFormData, "file">,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        field.handleChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-[90%] w-full  rounded-xl">
      <form.Subscribe
        selector={(state) => state.values.file}
        children={(fileString) => (
          <div className="flex-1 pb-3 min-h-[300px] overflow-auto">
            {fileString ? (
              <img
                src={fileString}
                className="h-full w-full object-fill rounded-lg border border-zinc-700"
                alt="Upload preview"
              />
            ) : (
              <div className="h-full w-full border-2 border-dashed border-zinc-700 rounded-lg flex items-center justify-center text-zinc-500">
                No image selected
              </div>
            )}
          </div>
        )}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="relative w-full h-40"
      >
        <form.Field
          name="content"
          validators={{
            onChange: ({ value }) =>
              !value || value.length < 3
                ? "Please write a bit more..."
                : undefined,
          }}
          children={(field) => (
            <div className="h-full w-full">
              <textarea
                value={field.state.value ?? ""}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={`w-full h-full rounded-lg bg-zinc-800 p-3 text-white outline-none resize-none border ${
                  field.state.meta.errors.length
                    ? "border-red-500"
                    : "border-zinc-700"
                }`}
                placeholder="What's on your mind?"
              />
              {field.state.meta.errors.length > 0 && (
                <span className="text-[10px] text-red-500 absolute top-2 right-3 uppercase font-bold">
                  {field.state.meta.errors[0]}
                </span>
              )}
            </div>
          )}
        />

        <div className="absolute bottom-0 w-full h-[50px] flex justify-between items-center px-[13px]">
          <form.Field
            name="file"
            children={(field) => (
              <label className="cursor-pointer text-gray-400 hover:text-cyan-400 transition-colors">
                <AttachFileIcon />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, field)}
                />
              </label>
            )}
          />

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="rotate-45 text-gray-300 hover:text-white disabled:opacity-20 transition-all"
              >
                <Send size={25} />
              </button>
            )}
          />
        </div>
      </form>
    </div>
  );
}

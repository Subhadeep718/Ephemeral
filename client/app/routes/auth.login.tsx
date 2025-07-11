import { Form } from "@remix-run/react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@mui/joy";
import { IoMdEye } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";

export default function LoginRoute() {
  return (
    <div>
      <Box component="form">
        <FormControl>
          <FormLabel>Email Id</FormLabel>
          <Input name="emailId" type="email" startDecorator={<MdMail />} />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            startDecorator={<FaLock />}
            endDecorator={<IoMdEye />}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <Button type="submit">Summit</Button>
      </Box>
    </div>
  );
}

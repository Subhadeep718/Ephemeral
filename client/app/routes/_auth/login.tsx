import { Form } from "@remix-run/react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@mui/joy";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function LoginRoute() {
  return (
    <div>
      <Box component="form">
        <FormControl>
          <FormLabel>Email Id</FormLabel>
          <Input name="emailId" type="email" startDecorator={<EmailIcon />} />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            startDecorator={<LockIcon />}
            endDecorator={<VisibilityIcon />}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <Button type="submit">Summit</Button>
      </Box>
    </div>
  );
}

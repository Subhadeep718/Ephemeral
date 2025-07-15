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
import "../styles/components/loginlayout.scss"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function LoginRoute() {
  return (
    <div className="form_box">
       <DotLottieReact
      src="https://lottie.host/8177cc18-7cbf-4f8a-8101-64469f204544/oqpH3R4wun.lottie"
      loop
      autoplay
    />
      <Box component="form">
        <FormControl>
          <FormLabel >Email Id</FormLabel>
          <Input variant="soft" name="emailId" type="email" startDecorator={<MdMail />} />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
          variant="soft"
            name="password"
            type="password"
            startDecorator={<FaLock />}
            endDecorator={<IoMdEye />}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <Button sx={{marginTop:"1rem"}} fullWidth variant="soft" color="success" type="submit">Summit</Button>
      </Box>
    </div>
  );
}

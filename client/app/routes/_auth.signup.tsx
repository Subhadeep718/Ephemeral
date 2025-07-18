import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { IoMdEye } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";


export default function SignupRoute() {
  return (
    <div  className="form_box">
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
        <FormControl>
          <FormLabel>Confrom Password</FormLabel>
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
  )
}
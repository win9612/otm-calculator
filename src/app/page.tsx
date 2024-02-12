import { container, main } from "@/styles/index.css";
import Image from "next/image";
import FullLogo from "../../public/오퇴몇logo_full.png";
import ProfileUploadForm from "@/components/ProfileUploadForm";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default function Home() {
  return (
    <main className={main}>
      <div className={container}>
        {/* <AccessAlarmIcon fontSize="medium" /> */}
        <Image alt="오퇴몇" src={FullLogo} width={180} height={180} />
        <ProfileUploadForm />
      </div>
    </main>
  );
}

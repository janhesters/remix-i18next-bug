import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export default function Index() {
  let { t } = useTranslation();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>{t('greeting')}</h1>
      <Link to="/home">Home</Link>
    </div>
  );
}

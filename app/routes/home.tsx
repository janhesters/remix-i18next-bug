import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";

// This tells remix to load the "home" namespace
export let handle = {
  i18n: "home",
};

export let loader = async ({ request }: LoaderArgs) => {
  let t = await i18next.getFixedT(request);
  let title = t("My page title");
  return json({ title });
};

export let meta: MetaFunction<typeof loader> = ({ data }) => {
  return { title: data.title };
};

export default function Component() {
  let { t } = useTranslation("home");
  return <div>
    <h1>{t("title")}</h1>
    <Link to="/">Landing</Link>
  </div>;
}
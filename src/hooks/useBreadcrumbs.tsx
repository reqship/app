import { Anchor, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Breadcrumbs as MantineBreadcrumbsComponent } from "@mantine/core";
export const useBreadcrumbs = () => {
  let [breadcrumbItems, setBreadcrumbItems] = useState([<></>]);
  useEffect(() => {
    setBreadcrumbItems(() => {
      let path = window.location.pathname;
      let items = [];
      for (let i = 0; i < path.split("/").length; i++) {
        let title = path.split("/")[i];
        items.push({
          href:
            window.location.origin +
            path
              .split("/")
              .splice(0, i + 1)
              .join("/"),
          title: title.length > 0 ? title : "home",
        });
      }
      return items.map((item, index) =>
        items.length - 1 !== index ? (
          <Anchor href={item.href} key={index}>
            {item.title}
          </Anchor>
        ) : (
          <Text c="reqship-pink" key={index}>
            {item.title}
          </Text>
        )
      );
    });
  }, []);
  const Breadcrumbs = () => {
    return (
      <MantineBreadcrumbsComponent mb="xl">
        {breadcrumbItems}
      </MantineBreadcrumbsComponent>
    );
  };

  return Breadcrumbs;
};

export default useBreadcrumbs;

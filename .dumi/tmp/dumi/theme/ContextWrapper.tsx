// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from '/Users/zhaochuanchuan/Desktop/个人项目/jc-ui/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {
  
  
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // mark loading when route change, page component will set false when loaded
        setLoading(true);

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"jc-ui","description":"A static site based on dumi","version":"0.0.1","license":"MIT","authors":["zjc 18341876207@qq.com"]},
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      themeConfig: {"footer":"Copyright © 2023 | Powered by <a href=\"https://d.umijs.org\" target=\"_blank\" rel=\"noreferrer\">dumi</a>","prefersColor":{"default":"light","switch":true},"name":"jc-ui"},
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}

// pages/label-page.tsx
import React from "react";
import { useRouter } from "next/router";

const LabelPage: React.FC = () => {
  const router = useRouter();
  const { url, label } = router.query;

  return (
    <>
      {url && label ? (
        <div className="badge">
          You clicked a link that said "{decodeURIComponent(label as string)}"
          to get here.
          <iframe
            src={decodeURIComponent(url as string)}
            width="100%"
            height="100%"
          />
        </div>
      ) : null}

      <style jsx>{`
        .badge {
          background-color: #f2f2f2;
          padding: 10px;
          text-align: center;
          height: 100px;
        }
        iframe {
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default LabelPage;

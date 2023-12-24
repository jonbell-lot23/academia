// pages/label-page.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";

const LabelPage: React.FC = () => {
  const router = useRouter();
  const { url, label } = router.query;
  const [showBadge, setShowBadge] = useState(true);

  return (
    <>
      {url && label ? (
        <>
          {showBadge && (
            <div className="text-sm rounded-md shadow-lg badge w-300">
              You clicked a link that said "
              {decodeURIComponent(label as string)}" to get here.
              <span className="close" onClick={() => setShowBadge(false)}>
                X
              </span>
            </div>
          )}
          <iframe
            src={decodeURIComponent(url as string)}
            width="100%"
            height="100%"
          />
        </>
      ) : null}

      <style jsx>{`
        .badge {
          background-color: #f2f2f2;
          padding: 10px;
          text-align: left;
          margin: 20px;
          height: 100px;
          position: fixed;
          width: 300px;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
          font-size: 0.875rem;
        }
        .close {
          position: absolute;
          right: 10px;
          top: 10px;
          cursor: pointer;
        }
        iframe {
          width: 100%;
          height: 100vh;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default LabelPage;

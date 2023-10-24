"use client";

import React from "react";
import { api } from "@/trpc/react";

const RenderButton = () => {
  const renderMutation = api.render.renderVideo.useMutation({
    onError: (error) => console.error(`Unable to render: ${error.message}`),
  });

  return (
    <>
      <button
        className="flex aspect-square items-center justify-center rounded-full bg-white p-3 text-black sm:aspect-auto sm:w-[8rem] sm:px-5 sm:py-2"
        onClick={() => renderMutation.mutate()}
        disabled={renderMutation.isLoading}
      >
        {renderMutation.isLoading ? "Rendering..." : "Render"}
      </button>

      {renderMutation.isSuccess && (
        <div className="border-2 border-green-500 p-3 text-white">
          Render successful with Render ID:
          <code>{renderMutation.data.id}</code>
        </div>
      )}

      {renderMutation.isError && (
        <div className="border-2 border-red-500 p-3 text-white">
          {renderMutation.error.message}
        </div>
      )}
    </>
  );
};

export default RenderButton;

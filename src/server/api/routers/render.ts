import { createTRPCRouter, publicProcedure } from "../trpc";
import { VERSION as REMOTION_VERSION } from "remotion";

const renderRouter = createTRPCRouter({
  renderVideo: publicProcedure.mutation(() => {
    // const version = REMOTION_VERSION;
    const version = `v0.1`;

    const renderId = `successful-render-${version}`;

    console.log(`Rendering ID generated: ${renderId}`);

    return { id: renderId };
  }),
});

export default renderRouter;

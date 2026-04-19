import { createContext, useContext } from 'react';

export type StoryArgsUpdater<TArgs extends object = Record<string, unknown>> = (args: Partial<TArgs>) => void;

const noop: StoryArgsUpdater = () => undefined;

export const StoryArgsUpdateContext = createContext<StoryArgsUpdater>(noop);

export function useStoryArgsUpdater<TArgs extends object>() {
  return useContext(StoryArgsUpdateContext) as StoryArgsUpdater<TArgs>;
}

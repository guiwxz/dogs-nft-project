import React from 'react';
import DogsProvider from './dogs/dogsProvider/dogsProvider';

const composeProviders = (...providers: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>) => 
  ({ children }: any) =>
    providers.reduceRight(
      (childrenProvider, Provider) => 
        //@ts-ignore
        <Provider>
          {childrenProvider}
        </Provider>,
      children 
    );
  


export const ComposedProviders = composeProviders(
  DogsProvider
  //WatchingProvider,
  //ToWatchProvider,
);
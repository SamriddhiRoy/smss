import { DashboardLayout } from "../dashboard/Layout";

interface ContentProps {
  title?: string;
}

export function Content(props: ContentProps) {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      
    <div className="relative mx-auto mb-12 max-w-screen-xl">
      <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow lg:flex lg:max-w-none">
        <div className="bg-white px-6 py-8 lg:p-12">
          <h3 className="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
            {"Accounts"}
          </h3>
          
      </div>
      </div>
    
      </div>
      </div>
  );
}

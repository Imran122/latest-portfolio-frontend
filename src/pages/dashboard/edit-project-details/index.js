import dynamic from "next/dynamic";
const index = () => {
  const DynamicEditor = dynamic(
    () =>
      import(
        "../../../components/DashboardComponent/DashboardComponents/EditProjectDetails/EditProjectDetails.js"
      ),
    {
      ssr: false,
    }
  );
  return (
    <div>
      <DynamicEditor></DynamicEditor>
    </div>
  );
};

export default index;

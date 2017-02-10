using System.Web;
using UmbracoStarterKit.ExtensionMethods.Strings;
public class TabViewModel
{
    public string Title { get; set; }

    public IHtmlString Content { get; set; }

    public string WrapClasses { get; set; }

    public string Id {
        get { return GetId(); } }

    private string GetId()
    {
        return Title.ConvertToId();
    }
}

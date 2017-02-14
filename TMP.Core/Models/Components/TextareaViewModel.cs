using System.Web;

namespace TMP.Core.Models.Components
{
    public class TextareaViewModel
    {
        public IHtmlString Text { get; set; }

        public string AdditionalClass { get; set; }

        public string WrapClasses { get; set; }

        public TextareaViewModel()
        {
        }
    }
}

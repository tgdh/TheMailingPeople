using System.Web;

namespace TMP.Core.Models.Components
{
    public class QuoteViewModel
    {
        public IHtmlString Quote { get; set; }

        public string Source { get; set; }

        public string Alignment { get; set; }

        public string AdditionalClass { get; set; }

        public string WrapClasses { get; set; }

        public QuoteViewModel()
        {

        }
    }
}

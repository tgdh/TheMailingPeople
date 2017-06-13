using System.Web;

namespace TMP.Core.Models.Components
{
    public class QuoteViewModel
    {
        public string Quote { get; set; }

        public string Source { get; set; }

        public bool Highlight { get; set; }

        public string Alignment { get; set; }
    }
}

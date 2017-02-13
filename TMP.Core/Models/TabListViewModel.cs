using System.Collections.Generic;
using System.Web;

namespace TMP.Core.Models
{
    public class TabListViewModel
    {
        public List<TabViewModel> Tabs { get; set; }

        public string MediaIds { get; set; }

        public string AdditionalClass { get; set; }

        public string WrapClasses { get; set; }

        public TabListViewModel()
        {

        }
    }
}
using System;
using Umbraco.Core.Models;

namespace TMP.Core.Models
{
    public class ArticleViewModel : IArticleCard
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime CreateDate { get; set; }

        public string Category { get; set; }

        public string Author { get; set; }

        public string Url { get; set; }

        public string LinkTarget { get; set; }

        public string Excerpt { get; set; }

        public IPublishedContent Thumbnail { get; set; }

        public string ExtraClasses { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace TMP.Core.Data
{
    public static class NewsRepository
    {
        public static IEnumerable<IPublishedContent> AllNewsArticles(UmbracoHelper umbraco)
        {
            var newsRoot = umbraco.TypedContentAtRoot().DescendantsOrSelf("news").FirstOrDefault();
            var newsArticle = new List<IPublishedContent>();

            if (newsRoot == null)
            {
                return newsArticle;
            }

            newsArticle = newsRoot.Descendants().ToList();

            return newsArticle;
        }

        public static IEnumerable<IPublishedContent> AllOrderedNewsArticles(UmbracoHelper umbraco)
        {
            return AllNewsArticles(umbraco).OrderByDescending(x => x.GetPropertyValue<DateTime>("releaseDate"));
        }

        public static IEnumerable<IPublishedContent> FilterSelection(IEnumerable<IPublishedContent> source, string category, string year, string month)
        {
            if (!string.IsNullOrWhiteSpace(category))
            {
                source = DataHelpers.FilterByDocumentType(source, category);
            }

            if (!string.IsNullOrWhiteSpace(year))
            {
                source = DataHelpers.FilterByYearAndMonth(source, year, month, "releaseDate");
            }

            return source;
        }

        public static IEnumerable<IPublishedContent> AllFilteredNewsArticles(UmbracoHelper umbraco, string category, string year, string month)
        {
            var allNewsArticles = AllOrderedNewsArticles(umbraco);

            if (!string.IsNullOrWhiteSpace(category))
            {
                allNewsArticles = DataHelpers.FilterByDocumentType(allNewsArticles, category);
            }

            if (!string.IsNullOrWhiteSpace(year))
            {
                allNewsArticles = DataHelpers.FilterByYearAndMonth(allNewsArticles, year, month, "releaseDate");
            }

            return allNewsArticles;
        }
    }
}

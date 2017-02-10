using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core.Models;
using Umbraco.Web;

namespace TMP.Core.Data
{
    public static class BlogRepository
    {
        public static IEnumerable<IPublishedContent> AllBlogPosts(UmbracoHelper umbraco)
        {
            var blogRoot = umbraco.TypedContentAtRoot().DescendantsOrSelf("blog").FirstOrDefault();
            var blogPosts = new List<IPublishedContent>();

            if (blogRoot == null)
            {
                return blogPosts;
            }

            blogPosts = blogRoot.Descendants().ToList();

            return blogPosts;
        }

        public static IEnumerable<IPublishedContent> AllOrderedBlogPosts(UmbracoHelper umbraco)
        {
            return AllBlogPosts(umbraco).OrderByDescending(x => x.GetPropertyValue<DateTime>("releaseDate"));
        }

        public static IEnumerable<IPublishedContent> FilterSelection(IEnumerable<IPublishedContent> source, string author, string category, string year, string month)
        {
            var filterByCategory = !string.IsNullOrWhiteSpace(category);
            var filterByAuthor = !string.IsNullOrWhiteSpace(author);

            if (filterByAuthor && filterByCategory)
            {
                var blogsInCategory = GetBlogPostsWithPrevalue(source, category, "category");
                var blogsByAuthor = GetBlogPostsWithPrevalue(source, author, "author");

                source = blogsInCategory.Intersect(blogsByAuthor).ToList();
            }
            else
            {
                if (filterByAuthor)
                {
                    source = GetBlogPostsWithPrevalue(source, author, "author");
                }

                if (filterByCategory)
                {
                    source = GetBlogPostsWithPrevalue(source, category, "category");
                }
            }
            
            if (!string.IsNullOrWhiteSpace(year))
            {
                source = DataHelpers.FilterByYearAndMonth(source, year, month, "releaseDate");
            }

            return source;
        }

        private static IEnumerable<IPublishedContent> GetBlogPostsWithPrevalue(IEnumerable<IPublishedContent> source, string pageName, string docType)
        {
            var prevaluePage = DataHelpers.GetBlogPrevaluePageByName(source, pageName);

            if (prevaluePage != null)
            {
                source = DataHelpers.FilberBySelectedPrevaluePage(source, docType, prevaluePage);
            }

            return source.ToList();
        }


        public static IEnumerable<IPublishedContent> AllFilteredBlogPosts(UmbracoHelper umbraco, string category, string year, string month)
        {
            var allNewsArticles = AllOrderedBlogPosts(umbraco);

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

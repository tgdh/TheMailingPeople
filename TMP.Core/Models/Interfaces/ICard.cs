using System;
using Umbraco.Core.Models;

namespace TMP.Core.Models.Interfaces
{
    public interface ICardBase
    {
        int Id { get; }

        string Name { get; }

        string Url { get; }

        string LinkTarget { get; }

        string Excerpt { get; }

        string ExtraClasses { get; set; }
    }

    public interface IThumbnailCard : ICardBase
    {
        IPublishedContent Thumbnail { get; }
    }

    public interface IDateCard : ICardBase
    {
        DateTime CreateDate { get; }
    }

    public interface IArticleCard : IThumbnailCard, IDateCard
    {
        string Category { get; }

        string Author { get; }
    }
}
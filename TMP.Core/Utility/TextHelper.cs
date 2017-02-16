namespace TMP.Core.Utility
{
    public class TextHelper
    {
        public static string TruncateAtWord(string text, int length, bool keepFullWordAtEnd = true)
        {
            const string ellipsis = "...";

            if (string.IsNullOrEmpty(text))
            {
                return string.Empty;
            }

            if (text.Length < length)
            {
                return text;
            }

            text = text.Substring(0, length);

            if (keepFullWordAtEnd)
            {
                text = text.Substring(0, text.LastIndexOf(' '));
                text = text + ellipsis;
            }

            return text.Replace(",...", "...").Replace(";...", "...");
        }
    }

}

using System;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace TMP.Core.ExtensionMethods
{
    public static class StringExtensionMethods
    {
        private static readonly string LettersAndDigitsPattern = @"[^0-9a-zA-Z]+";

        public static bool IsValidEmail(this string email)
        {
            try
            {
                var addr = new MailAddress(email.Trim());
                return addr.Address == email;
            }
            catch (FormatException)
            {
                return false;
            }
        }

        public static string ConvertToId(this string source)
        {
            return !string.IsNullOrWhiteSpace(source) ? Regex.Replace(source, LettersAndDigitsPattern, string.Empty).ToLower() : "";
        }

        public static string CreateGuid()
        {
            return Guid.NewGuid().ToString("N");
        }
    }
}

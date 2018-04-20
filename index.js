/**
 * Convert template literal to string formatter function.
 *
 * @param  {Array<String>} parts String values.
 * @param  {Array<Function|Formatter>} formatters Values formatters.
 * @return {Function<String>} Return formatter function.
 */
function toFormat(parts, ...formatters) {
    const pLen = parts.length;
    const fLen = formatters.length;

    const format = function(...values) {
        const result = new Array(pLen);

        for (let i = 0; i < fLen; i++) {
            result[i] = parts[i] + formatters[i](values[i]);
        }

        result[fLen] = parts[fLen];

        return result.join('');
    };

    return format;
}

module.exports = toFormat;

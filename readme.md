# Webmention Engine

This quick tool serves as an archive for webmentions gathered by [Webmention.io](https://webmention.io). This allows me to keep each webmention as an individual file, and provides an extra backup of this data.

Currently, avatars are NOT being archived, though that is possibly something I'll add in the future.

## Archiving

The actual archiving is being done with a workflow in [Pipedream](https://pipedream.com). Workflow summary:

- Triggered by new item in RSS feed (the webmention.io atom feed).
- Takes data from RSS item and writes new file to GitHub.
- From there, Netlify sees a new commit to GitHub and rebuilds to include the new item.

## Mention Item Schema

"?" means that item might not be there.

```js
{
	type: "entry",
	author: {
		type: "card",
		name: "[profile name]",
		photo: "[profile avatar]",
		url: "[profile link]"
	},
	url: "[link to comment, or post that was interacted with]",
	published: "[date/time/utc - time action was published, if available]",
	"wm-received": "[date/time - time webmention was received]",
	"wm-id": "[webmention.io unid]",
	"wm-source": "[url that sent webmention]",
	"wm-target": "[url that webmention was sent to]",
	"wm-protocol": "webmention",
	"content": {
		html: "[html markup of content]",
		text: "[plaintext only content]"
	}
	"in-reply-to": "[url being replied to]",
	"like-of": "[url being liked]",
	"repost-of": "[url being reposted]",
	"bookmark-of": "[url being bookmarked]",
	"mention-of": "[url being mentioned ('@ed')]",
	rsvp: "[url of event being rsvp'ed to]",
	"wm-property": "[in-reply-to | like-of | repost-of | bookmark-of | mention-of | rsvp]",
	"wm-private": false
}
```
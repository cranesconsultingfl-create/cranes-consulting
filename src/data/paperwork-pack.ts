export interface PackPrompt {
  id: string;
  title: string;
  when: string;
  prompt: string;
}

export const packPrompts: PackPrompt[] = [
  {
    id: 'change-order',
    title: 'Change order from a voice note',
    when: 'The GC or homeowner asks for extra work on site.',
    prompt: `You are the office manager for [Company], a [trade] subcontractor. Turn my notes below into a change order request for the general contractor.

Include: project name and address, change order number [#], date, a plain description of the added or changed work, why it changed (who asked and when), itemized labor, material and equipment with quantities and prices, markup at [x]%, total, schedule impact in working days, and a line for the GC's signature and date. State that work starts only after signed approval.

Keep it to one page and professional. Ask me for anything missing instead of guessing.

My notes: [paste or dictate what happened]`,
  },
  {
    id: 'pay-app',
    title: 'Pay application cover email and backup checklist',
    when: 'Before you send a pay app, so it gets approved on the first submission.',
    prompt: `Write a short email to [GC project manager] at [GC company] submitting pay application #[#] for [project] for the period ending [date]. Amount this period: $[amount]. Retainage held to date: $[amount].

List the attachments I'm including: [the GC's pay app form or G702/G703], lien waivers the GC requires, updated certificate of insurance, and any approved change orders billed this period.

Then give me a checklist of what a GC typically needs to approve a pay app on the first submission, and flag anything I haven't listed.`,
  },
  {
    id: 'coi-request',
    title: 'Certificate of insurance request to your agent',
    when: 'A new job starts or a GC says your certificate is missing something.',
    prompt: `Write an email to my insurance agent [name] requesting a certificate of insurance for [GC company] on [project and address].

The GC's contract requires: [paste the insurance section].

Ask for each requirement by name, for example additional insured status, waiver of subrogation, primary and non-contributory wording, and the limits listed. Ask them to send it directly to [GC email] and copy me, and to tell me every policy expiration date so I can renew before anything lapses.`,
  },
  {
    id: 'contract-checklist',
    title: 'Turn a subcontract into a paperwork checklist',
    when: 'You sign a new subcontract and want to know everything you owe the GC.',
    prompt: `Below is the subcontract or the GC's requirements for [project]. Read it and make me a checklist of every document, deadline and form I owe the GC: insurance, licenses, W-9, safety documents, submittals, pay app due dates and format, lien waiver requirements, notice deadlines, closeout documents and warranty.

Put it in a table with the item, the due date or trigger, and the section it comes from. Flag anything unusual or risky so I can ask about it.

[paste the contract section]`,
  },
  {
    id: 'reply-gc',
    title: 'Reply to the GC in two minutes',
    when: 'An email from the GC is sitting unanswered because you are on a roof.',
    prompt: `Write a short, professional reply to this email from the GC. Answer what they asked, give a specific date or next step, and don't over-explain or apologize. If I don't have the answer yet, say when I will. Keep it under 120 words.

Their email: [paste]
What I want to say: [a few words]`,
  },
  {
    id: 'delay-notice',
    title: 'Written delay notice',
    when: 'Weather, a hurricane, a backorder or another trade is holding you up.',
    prompt: `Write a written delay notice to [GC] for [project].

Cause: [weather, hurricane, material backorder, waiting on another trade, design change]. Dates affected: [dates]. Work affected: [scope].

Include what we're doing to limit the delay, the expected new completion date for our scope, and a reference to the notice requirement in our subcontract [section, if known]. Keep it factual, calm and dated.`,
  },
  {
    id: 'daily-log',
    title: 'Daily log from the drive home',
    when: 'End of the day, dictated into your phone.',
    prompt: `Turn my notes into a daily log for [project] on [date].

Format: crew on site and hours, work completed by area, materials delivered, equipment used, weather, inspections, visitors, safety notes, problems or delays, and the plan for tomorrow. Use short bullet points.

My notes: [dictate on the drive home]`,
  },
  {
    id: 'invoice-follow-up',
    title: 'Invoice follow-up, polite then firm',
    when: 'An invoice is past due and you hate chasing money.',
    prompt: `Write a polite payment follow-up to [customer or GC] for invoice #[#] for $[amount], dated [date], now [x] days past due. Restate what the invoice covers, attach a copy, and ask for an expected payment date.

Then write a second, firmer version I can send if there's no reply in 7 days, still professional. Don't threaten anything I haven't said I will do.`,
  },
  {
    id: 'rfi',
    title: 'Scope question (RFI) the GC can answer fast',
    when: 'The drawings conflict or a detail is missing.',
    prompt: `Write a clear request for information to [GC] for [project].

My question: [describe the conflict or missing detail]. Reference drawing sheet or spec section [number], say what we will assume if we don't hear back by [date], and note any cost or schedule impact. One question per RFI.`,
  },
  {
    id: 'customer-update',
    title: 'Weekly update for a homeowner or customer',
    when: 'Friday afternoon, so the customer never has to ask where things stand.',
    prompt: `Write a short weekly update for [homeowner or business customer] on [project].

Finished this week: [work]. Next week: [work]. Anything we need from them, with a date: [items]. Any schedule change and why: [details].

Friendly, plain language, no jargon, under 150 words.`,
  },
];

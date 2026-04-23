# Security Specification for Nova Lycée

## Data Invariants
1. Only the verified owner of the email `moatadidrayan7@gmail.com` can create, update, or delete content.
2. Events must have a valid status and title.
3. Timestamps on events must be managed securely.

## The Dirty Dozen Payloads (Denied)
1. Unauthorized creation of an event by a non-admin.
2. Promotion of a regular user to admin (not applicable as auth is email-based, but guarded).
3. Deletion of the site settings by an anonymous user.
4. Injecting a massive string into event titles (max size check).
5. Updating an event's `participantCount` manually from the client without proper logic.
6. Spoofing the `updatedAt` field with a client timestamp.
7. Creating an event with a missing required field (e.g., status).
8. Overwriting the `ownerId` of a resource.
9. Listing the `admins` collection (if it existed) as a guest.
10. Rapid-fire creation of dummy projects (rate limiting concept).
11. Changing an event status to an invalid value.
12. Injecting scripts into the `description` field.

## Firestore Security Rules Draft
(To be evaluated and finalized)

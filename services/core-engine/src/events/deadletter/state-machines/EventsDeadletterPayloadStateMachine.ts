export type EventsDeadletterPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterPayloadStateMachine {
  private allowedTransitions: Record<EventsDeadletterPayloadState, EventsDeadletterPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterPayloadState, to: EventsDeadletterPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterPayloadState, to: EventsDeadletterPayloadState): EventsDeadletterPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterPayload: " + from + " -> " + to);
    }
    return to;
  }
}

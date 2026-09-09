export type EventsOutboxPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxPayloadStateMachine {
  private allowedTransitions: Record<EventsOutboxPayloadState, EventsOutboxPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxPayloadState, to: EventsOutboxPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxPayloadState, to: EventsOutboxPayloadState): EventsOutboxPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxPayload: " + from + " -> " + to);
    }
    return to;
  }
}

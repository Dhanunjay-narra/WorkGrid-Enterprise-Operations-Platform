export type EventsSchemaPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaPayloadStateMachine {
  private allowedTransitions: Record<EventsSchemaPayloadState, EventsSchemaPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaPayloadState, to: EventsSchemaPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaPayloadState, to: EventsSchemaPayloadState): EventsSchemaPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaPayload: " + from + " -> " + to);
    }
    return to;
  }
}

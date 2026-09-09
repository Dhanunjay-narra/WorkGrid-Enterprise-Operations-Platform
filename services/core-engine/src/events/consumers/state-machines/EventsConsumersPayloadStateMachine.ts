export type EventsConsumersPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersPayloadStateMachine {
  private allowedTransitions: Record<EventsConsumersPayloadState, EventsConsumersPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersPayloadState, to: EventsConsumersPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersPayloadState, to: EventsConsumersPayloadState): EventsConsumersPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersPayload: " + from + " -> " + to);
    }
    return to;
  }
}

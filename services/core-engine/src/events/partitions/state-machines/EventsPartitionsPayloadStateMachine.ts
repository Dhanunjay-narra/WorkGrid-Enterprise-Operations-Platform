export type EventsPartitionsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsPayloadStateMachine {
  private allowedTransitions: Record<EventsPartitionsPayloadState, EventsPartitionsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsPayloadState, to: EventsPartitionsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsPayloadState, to: EventsPartitionsPayloadState): EventsPartitionsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsPayload: " + from + " -> " + to);
    }
    return to;
  }
}

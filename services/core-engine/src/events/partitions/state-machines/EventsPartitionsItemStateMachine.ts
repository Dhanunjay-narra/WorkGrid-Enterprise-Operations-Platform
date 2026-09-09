export type EventsPartitionsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsItemStateMachine {
  private allowedTransitions: Record<EventsPartitionsItemState, EventsPartitionsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsItemState, to: EventsPartitionsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsItemState, to: EventsPartitionsItemState): EventsPartitionsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsItem: " + from + " -> " + to);
    }
    return to;
  }
}

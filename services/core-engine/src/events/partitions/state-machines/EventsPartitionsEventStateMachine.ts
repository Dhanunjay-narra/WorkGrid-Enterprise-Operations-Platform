export type EventsPartitionsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsEventStateMachine {
  private allowedTransitions: Record<EventsPartitionsEventState, EventsPartitionsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsEventState, to: EventsPartitionsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsEventState, to: EventsPartitionsEventState): EventsPartitionsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsEvent: " + from + " -> " + to);
    }
    return to;
  }
}

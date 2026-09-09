export type EventsPartitionsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsStateStateMachine {
  private allowedTransitions: Record<EventsPartitionsStateState, EventsPartitionsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsStateState, to: EventsPartitionsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsStateState, to: EventsPartitionsStateState): EventsPartitionsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsState: " + from + " -> " + to);
    }
    return to;
  }
}

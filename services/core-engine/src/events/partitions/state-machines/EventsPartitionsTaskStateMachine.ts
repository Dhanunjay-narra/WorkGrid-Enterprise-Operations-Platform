export type EventsPartitionsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsTaskStateMachine {
  private allowedTransitions: Record<EventsPartitionsTaskState, EventsPartitionsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsTaskState, to: EventsPartitionsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsTaskState, to: EventsPartitionsTaskState): EventsPartitionsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsTask: " + from + " -> " + to);
    }
    return to;
  }
}

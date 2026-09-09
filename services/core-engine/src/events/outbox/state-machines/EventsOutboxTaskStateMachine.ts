export type EventsOutboxTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxTaskStateMachine {
  private allowedTransitions: Record<EventsOutboxTaskState, EventsOutboxTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxTaskState, to: EventsOutboxTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxTaskState, to: EventsOutboxTaskState): EventsOutboxTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxTask: " + from + " -> " + to);
    }
    return to;
  }
}

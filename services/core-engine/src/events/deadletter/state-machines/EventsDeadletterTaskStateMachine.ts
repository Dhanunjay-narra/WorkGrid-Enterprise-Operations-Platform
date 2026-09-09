export type EventsDeadletterTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterTaskStateMachine {
  private allowedTransitions: Record<EventsDeadletterTaskState, EventsDeadletterTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterTaskState, to: EventsDeadletterTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterTaskState, to: EventsDeadletterTaskState): EventsDeadletterTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterTask: " + from + " -> " + to);
    }
    return to;
  }
}

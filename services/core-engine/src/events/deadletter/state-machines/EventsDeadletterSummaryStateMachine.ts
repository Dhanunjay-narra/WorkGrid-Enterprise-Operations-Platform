export type EventsDeadletterSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterSummaryStateMachine {
  private allowedTransitions: Record<EventsDeadletterSummaryState, EventsDeadletterSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterSummaryState, to: EventsDeadletterSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterSummaryState, to: EventsDeadletterSummaryState): EventsDeadletterSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterSummary: " + from + " -> " + to);
    }
    return to;
  }
}

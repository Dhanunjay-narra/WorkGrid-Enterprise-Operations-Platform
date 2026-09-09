export type EventsReplayReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayReportStateMachine {
  private allowedTransitions: Record<EventsReplayReportState, EventsReplayReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayReportState, to: EventsReplayReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayReportState, to: EventsReplayReportState): EventsReplayReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayReport: " + from + " -> " + to);
    }
    return to;
  }
}

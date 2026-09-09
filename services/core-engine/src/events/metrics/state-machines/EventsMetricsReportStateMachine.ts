export type EventsMetricsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsMetricsReportStateMachine {
  private allowedTransitions: Record<EventsMetricsReportState, EventsMetricsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsMetricsReportState, to: EventsMetricsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsMetricsReportState, to: EventsMetricsReportState): EventsMetricsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsMetricsReport: " + from + " -> " + to);
    }
    return to;
  }
}

export type ObsDashboardsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsPayloadStateMachine {
  private allowedTransitions: Record<ObsDashboardsPayloadState, ObsDashboardsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsPayloadState, to: ObsDashboardsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsPayloadState, to: ObsDashboardsPayloadState): ObsDashboardsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsPayload: " + from + " -> " + to);
    }
    return to;
  }
}

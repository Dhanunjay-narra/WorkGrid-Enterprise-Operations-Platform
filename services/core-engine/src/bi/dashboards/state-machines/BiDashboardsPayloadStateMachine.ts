export type BiDashboardsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsPayloadStateMachine {
  private allowedTransitions: Record<BiDashboardsPayloadState, BiDashboardsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsPayloadState, to: BiDashboardsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsPayloadState, to: BiDashboardsPayloadState): BiDashboardsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsPayload: " + from + " -> " + to);
    }
    return to;
  }
}

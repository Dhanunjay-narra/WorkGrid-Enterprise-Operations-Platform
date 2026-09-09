export type IotAnomaliesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesSessionStateMachine {
  private allowedTransitions: Record<IotAnomaliesSessionState, IotAnomaliesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesSessionState, to: IotAnomaliesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesSessionState, to: IotAnomaliesSessionState): IotAnomaliesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesSession: " + from + " -> " + to);
    }
    return to;
  }
}

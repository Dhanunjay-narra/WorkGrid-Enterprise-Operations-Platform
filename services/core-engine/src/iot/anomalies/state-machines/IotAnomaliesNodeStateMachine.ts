export type IotAnomaliesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesNodeStateMachine {
  private allowedTransitions: Record<IotAnomaliesNodeState, IotAnomaliesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesNodeState, to: IotAnomaliesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesNodeState, to: IotAnomaliesNodeState): IotAnomaliesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesNode: " + from + " -> " + to);
    }
    return to;
  }
}

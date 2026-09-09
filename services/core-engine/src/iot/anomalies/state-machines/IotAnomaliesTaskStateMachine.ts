export type IotAnomaliesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotAnomaliesTaskStateMachine {
  private allowedTransitions: Record<IotAnomaliesTaskState, IotAnomaliesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotAnomaliesTaskState, to: IotAnomaliesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotAnomaliesTaskState, to: IotAnomaliesTaskState): IotAnomaliesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotAnomaliesTask: " + from + " -> " + to);
    }
    return to;
  }
}

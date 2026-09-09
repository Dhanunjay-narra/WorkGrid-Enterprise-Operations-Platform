export type IotFleetTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetTaskStateMachine {
  private allowedTransitions: Record<IotFleetTaskState, IotFleetTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetTaskState, to: IotFleetTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetTaskState, to: IotFleetTaskState): IotFleetTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetTask: " + from + " -> " + to);
    }
    return to;
  }
}

export type IotThresholdsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsNodeStateMachine {
  private allowedTransitions: Record<IotThresholdsNodeState, IotThresholdsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsNodeState, to: IotThresholdsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsNodeState, to: IotThresholdsNodeState): IotThresholdsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsNode: " + from + " -> " + to);
    }
    return to;
  }
}

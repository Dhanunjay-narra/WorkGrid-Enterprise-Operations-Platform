export type ProjectTasksBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksBatchStateMachine {
  private allowedTransitions: Record<ProjectTasksBatchState, ProjectTasksBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksBatchState, to: ProjectTasksBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksBatchState, to: ProjectTasksBatchState): ProjectTasksBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksBatch: " + from + " -> " + to);
    }
    return to;
  }
}

checkpoint:
	@git add -A
	@git commit -m "checkpoint at $$(TZ='America/Sao_Paulo' date '+%d/%m/%Y %H:%M:%S %z')"
	@git push
	@echo Checkpoint created and pushed to remote
